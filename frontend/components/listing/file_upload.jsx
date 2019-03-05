import React from 'react';


class FileUpload extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
     photos: []
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
    this.state.photos.push(e.currentTarget.files[0]);
    this.update('photosData');
  }

  formClasses() {
    if (this.props.photoDrop) {
      return 'photo-form';

    } else {
      return 'photo-form hidden-form';
    }
  }


  render(){
    
    return (
      <div className={this.formClasses()}>
        <span>It’s important for travelers to see your car before they request it. 
          Once you have a good photo that shows the whole car, add more photos displaying the car’s details and interior.</span>
          <input onChange={this.handleFile.bind(this)} type="file" />
        <button onClick={() => this.openNextDrop()} className="next-form" >Next</button>
      </div>
    )
  }
}


export default FileUpload;