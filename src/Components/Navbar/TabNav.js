import React from 'react';

class TabNav extends React.Component {

    render(){
        return(
            <div style={{width:'30%'}}>
                <ul className="nav nav-tabs">
                    {
                        this.props.tabs.map()
                    }
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default TabNav;