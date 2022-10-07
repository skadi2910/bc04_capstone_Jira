import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { selectedKeyAction } from '../../../redux/actions/SelectKeyAction';

export default function ProjectManagement() {
    const dispatch = useDispatch();
    const key = 1;
    useEffect(() => {
        dispatch(selectedKeyAction(key)); //! chinh key cho sidebar
    }, [])
    return (
        <div>
            ProjectManagement
        </div>
    )
}
