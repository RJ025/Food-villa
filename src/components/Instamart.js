import { useState } from "react"

const Section = ({title , description , isVisible , setIsVisible})=>{

    return (
        <div className="border border-black p-2 m-2">
            <h2 className="font-bold text-xl">{title}</h2>
            {(isVisible)?
                <button className="cursor-pointer underline" onClick={()=>setIsVisible(false)}>hide</button>
            : <button className="cursor-pointer underline" onClick={()=>setIsVisible(true)}>show</button>}

            {isVisible && <p>{description}</p>}
            
        </div>
    )
}

const Instamart = () => {
    const [isVisible , setIsVisible] = useState("about");
    return (
        <>
            <Section 
                title="about instamart"
                description = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                isVisible = {isVisible==="about"}
                setIsVisible={()=>setIsVisible("about")}
            />
            <Section 
                title="team instamart"
                description = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                isVisible = {isVisible==="team"}
                setIsVisible={()=>setIsVisible("team")}
            />
            <Section 
                title="career instamart"
                description = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                isVisible = {isVisible==="career"}
                setIsVisible={()=>setIsVisible("career")}
            />
            
        </>
    )
}

export default Instamart