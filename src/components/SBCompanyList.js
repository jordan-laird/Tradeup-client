import React from 'react'
import { SBCurrentPrices } from '../unused_components/SBCurrentPrices'
import { Container, Divider } from 'semantic-ui-react'

export class SBCompanyList extends React.Component{
    
    render(){
        const currentPrices = this.props.currentPrices || new Object
        return(
            <Container>
                {this.props.companyList.map(companyInfo => (
                    <Container onClick={e => this.props.handleClick(companyInfo.symbol)}>
                       <h3 >
                       {companyInfo.symbol}
                       </h3>
                       <h4>
                       {companyInfo.companyName}
                       </h4>
                        {currentPrices[companyInfo.symbol] ? currentPrices[companyInfo.symbol].close : null }
                       <Divider />
                   </Container>

                ))}
            </Container>
        )
    }
}