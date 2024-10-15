import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CommentsRequest } from './slice/comments';

export default function Comments() {

    const [pageSize, setPageSize] = useState(100);
    const [page, setPage] = useState(1);
    const comments = useSelector(y => y.comments?.data);

    console.log(comments);

    const dis = useDispatch();

    useEffect(() => {
        dis(CommentsRequest());
    }, [page, pageSize]);

    const abc = () => {
        let p = [];
        for (let i = 1; i <= Math.ceil(comments.length / pageSize); i++) {
            p.push(i);
        }
        return p;
    }

    return (
        <div>
            <ul>
                {
                    comments?.slice((page - 1) * pageSize, ((page - 1) * pageSize) + pageSize).map((p) => {
                        return (<li>{p.id}</li>)
                    })
                }
            </ul>
            {
                abc()?.map((v) => {
                    return (
                    <button onClick={() => {  setPage(v); }}>{v}</button>)
                })
            }
        </div>
    )
}