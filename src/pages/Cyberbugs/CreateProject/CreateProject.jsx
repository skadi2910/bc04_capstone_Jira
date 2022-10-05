import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { SelectAction, selectedKeyAction } from '../../../redux/actions/SelectKeyAction';

export default function CreateProject() {
    const dispatch = useDispatch();
    const key = 3;
    useEffect(() => {
        dispatch(selectedKeyAction(key)); //! chinh key cho sidebar
    }, [])
    // dispatch()

    return (
        <div>CreateProject</div>
    )
}
