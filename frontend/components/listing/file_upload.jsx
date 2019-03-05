import React from 'react';


class FileUpload extends React.Component{
  constructor(props){
    super(props);
  }

  openNextDrop(){
    this.props.closeListingDrop();
    this.props.closeCarDrop();
    this.props.closePhotoDrop();
  }

  update(field) {
    return e => {
      // let newState = Object.assign({}, this.props.listingFormData, { [field]: e.target.value });
      // this.setState({listingFormData: newState });

      this.props.updateState({ [field]: e.target.value });
    };
  }


  handleFile(e){
    this.props.updateState({})
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