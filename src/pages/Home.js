import React from "react";
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import PageBuilder from "../components/page-builder/PageBuilder";

const Homepage = () => {
    const { loading, error, data } = useQuery(loader('../apollo/pages/homepage.gql'));
    if(loading) return <div className="loading-screen" />;
    if(error) return <p>Error: {error.message}</p>;
    return (
        <PageBuilder dataSource={data.page.pageBuilder.pageBuilder} />
    )
}

export default Homepage