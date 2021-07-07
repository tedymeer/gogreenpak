import SimpleReactFooter from "simple-react-footer";
import './footer.css'
import React from 'react'

const description = "Go Green Pakistan is a non profit organization, which aims to plant trees in pakistan and make pakistan green again. So far we have planted plants at many places, our message is that 'Money is not needed, responsibility is' take action now and adopt a plant today";
  const title = "About us";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Careers",
                link: "/careers"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Admin",
                link: "/admin"
            }
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
    {
        title: "Visit",
        resources: [
            {
                name: "Locations",
                link: "/locations"
            },
            {
                name: "Culture",
                link: "/culture"
            }
        ]
    }
 ];


function Footer() {
    return (
        <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="PlantLives"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="Go Green Pakistan"
    iconColor="black"
    backgroundColor="#f6f5eb"
    fontColor="black"
    copyrightColor="darkgrey"
 />
    )
}

export default Footer
