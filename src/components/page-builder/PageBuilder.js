import React from 'react'

import TextImage from "./components/TextImage"
import ShowcaseCards from "./components/ShowcaseCards"
import ProjectCards from "./components/ProjectCards"

const PageBuilder = (props) => {
    const components = props.dataSource;
    return (
        <div>
            {components.map(component => {
                if(component.fieldGroupName === "Page_Pagebuilder_PageBuilder_TextImage") {
                    return <TextImage dataSource={component} />
                } else if(component.fieldGroupName === "Page_Pagebuilder_PageBuilder_ShowcaseCards") {
                    return <ShowcaseCards dataSource={component} />
                } else if(component.fieldGroupName === "Page_Pagebuilder_PageBuilder_ProjectCards") {
                    return <ProjectCards dataSource={component} />
                } else {
                    return null;
                }
            }
            )}
        </div>
    )
}

export default PageBuilder