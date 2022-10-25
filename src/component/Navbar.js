import React from 'react'

const Navbar = ({ filterData, uniqueList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        uniqueList.map((uniqueList) => {
                            return (
                                <button className="btn-group__item" onClick={() => filterData(uniqueList)}>{uniqueList}</button>
                            )
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
