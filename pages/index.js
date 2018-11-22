import React, {Component} from 'react'

const productCardProps = {imgSrc: '../static/favicon.ico', items: [{text: 'something'}, {text: 'something2'}]}

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {listLength: props.items.length};
    }
    render() {
        return (
            <div className="thumbnail-container">
                <img src={this.props.imgSrc} className="main-img"/>
                <ul className="item-list">
                    {this.props.items.map((item) =>
                        <li className="item">
                            <span className="item-span"> {item.text} </span>
                        </li>
                    )}
                </ul>
                <style jsx> {`
                    .thumbnail-container {
                       width: 100%;
                       height: 100%;
                    }

                    .main-img {
                        width: 20%;
                        height: calc(${this.state.listLength} * 50px);
                    }
                `}
                </style>
            </div>
        );
    }
}


const Home = () => (
  <div>
    <div className="hero">
      <ProductCard imgSrc={productCardProps.imgSrc} items={productCardProps.items}/>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
      }
    `}</style>
  </div>
)

export default Home
