import React from 'react';


class FileUpload extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
     photos: [],
     photosUrl: []
    };
  }

  openNextDrop(){
    this.props.closeListingDrop();
    this.props.closeCarDrop();
    this.props.closePhotoDrop();
  }

  update(field) {
      // let newState = Object.assign({}, this.props.listingFormData, { [field]: e.target.value });
      // this.setState({listingFormData: newState });

    return this.props.updateState({ [field]: this.state.photos });
  }


  handleFile(e){
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];

    fileReader.onloadend = () => {
      let photos = this.state.photos;
      photos.push(file);
      let photosUrl = this.state.photosUrl;
      photosUrl.push(fileReader.result);
      this.setState({photos, photosUrl });
    };
    if(file){
      fileReader.readAsDataURL(file);
    }
    this.update('photosData');
  }

  formClasses() {
    if (this.props.photoDrop) {
      return 'photo-form';

    } else {
      return 'photo-form hidden-form';
    }
  }

  // loadImagePreview(){
  //   if(this.state.photos.length > 0){
  //     const fileReader = new FileReader();
  //     this.state.photos.forEach(photo => {
  //       // return (
  //       //   <img src={fileReader.readAsDataURL(photo)} />
  //       // )
  //     });
  //   }
  // }


  render(){
    return (
      <div className={this.formClasses()}>
        <div className='photo-form-text'>It’s important for travelers to see your car before they request it. 
          Once you have a good photo that shows the whole car, add more photos displaying the car’s details and interior.</div>
          <div className='image-preview'>
            <input className='upload-input' onChange={this.handleFile.bind(this)} type="file" />
            {this.state.photosUrl.map(url => <img src={url} />)}
          </div>
        <button onClick={() => this.openNextDrop()} className="next-form" >Next</button>
      </div>
    )
  }
}


export default FileUpload;