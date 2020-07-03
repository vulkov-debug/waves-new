import React, { Component } from 'react'

import ImageLightbox from '../utils/lightbox';

export default class ProdImg extends Component {


    state = {
        lightbox: false,
        imagePos:0,
        lightboxImages:[]
    }

 componentDidMount(){
     if(this.props.detail.images.length>0){
        let lightboxImages = [];


        this.props.detail.images.forEach(item=> {
            lightboxImages.push(item.url)
        })
        this.setState({
            lightboxImages
        })
     }
 }

 handleLightBox = (pos) => {
   if(this.state.lightboxImages.length >0){
   this.setState({
       lightbox: true,
       imagePos: pos
   })
   }
 }

 handleLightBoxClose = () => {
     this.setState({lightbox: false})
 }

 showThumbs = () => (
     this.state.lightboxImages.map((item,i)=>(
            i>0 &&
            <div
            key={i}
            onClick={()=> this.handleLightBox(i)}
            className='thumb'
            style={{background: `url(${item}) no-repeat`}}
            ></div>
     ))
 )


 renderCardImage = (images) => {
   if(images.length>0){
   return images[0].url
   }else{
       return `/images/image_not_available.png`
   }
 }

    render() {
        const {detail} = this.props;
        return (
            <div className='product_image_container'>
                <div className="main_pic">
                    <div
                     style={{background:`url(${this.renderCardImage(detail.images)}) no-repeat`}}
                     onClick={()=> this.handleLightBox(0)}
                    ></div>
                </div>
                <div className='main_thumbs'>
                    {this.showThumbs(detail)}
                </div>
                {
                    this.state.lightbox &&
                     <ImageLightbox
                      if={detail.id}
                      images={this.state.lightboxImages}
                      open={this.state.open}
                      pos={this.state.imagePos}
                      onClose={()=> this.handleLightBoxClose()}
                     />
                }
            </div>
        )
    }
}
