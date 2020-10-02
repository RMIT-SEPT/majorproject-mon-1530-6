import React, { Fragment } from 'react';

//home page for all users
export default function Home() {
    return (
        <Fragment>
            <a className=" coolBeans body-hov" href="/login">ADMIN</a>
            <a className=" coolBeans body-hov" href="/login">EMPLOYEE</a>
            <a className=" coolBeans body-hov" href="/register">USER</a>
        </Fragment >
    )
}
