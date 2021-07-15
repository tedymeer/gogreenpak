import React, { useState } from "react";
import Gallery from 'react-photo-gallery'
import Photo from "./photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import photos from "./photos";

const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

function Gallerypics() {
    const [items, setItems] = useState(photos);

    const onSortEnd = ({ oldIndex, newIndex }) => {
      setItems(arrayMove(items, oldIndex, newIndex));
    };
  
    return (
      <div>
        <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
      </div>
    );
}

export default Gallerypics
