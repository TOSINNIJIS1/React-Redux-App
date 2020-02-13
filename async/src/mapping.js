import React from 'react';
import {connect} from 'react-redux';
import {fetch} from '../src/components/action'


const Rick = (props) => {

    console.log(props)


    const onSubmit = e => {
        e.preventDefault();
        props.fetch();
    }


    return (

        <div>
            {props.isFetching ? (
                <div> **fetching data** </div>
            ) : ( <button onClick={onSubmit} > Click</button> )}

            <div>
                {props.rick.map(ricky => {
                    return (
                        <div className="ricky">
                            <div className='image'>
                            <img src={ricky.image} top-width="20%" />
                            {ricky.name}  
                            {ricky.status}
                            </div>

                        </div>
                    )
                })}
            </div>
            
        </div>
    )

}

const mapStateToProps = state => ({
    rick: state.rick,
    error: state.error,
    isFetching: state.isFetching
})


export default connect(mapStateToProps, {fetch})(Rick)