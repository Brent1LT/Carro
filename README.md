# Carro

[Live Site](https://carro-web-app.herokuapp.com/#/)

Carro is a pixel for pixel clone of the popular web app Turo, in which users can rent their cars out for small
periods of time to another user. Carro uses RESTful routes and CRUD to create an interactive user 
experience in which a user can create, read, update, and delete listings.

## Technologies
On the backend, the following technologies were chosen for their ease-of-use and versatility
* *Ruby on Rails*
* *JBuilder*
* *PostgreSQL*
* *AWS S3*
* *Heroku*

For the frontend, we used the following libraries to take advantage of their specific features.
* *React* -- for it's modular & re-usable components
* *Redux* -- for it's global store and dynamic reducers
* *AJAX* -- for it's backend connection 
* *JavaScript* -- for it's ability to engage with the browser

## Features
* Users can create/view/update/delete listings
* User accounts secured with hashed and salted passwords
* Users can upload images of their car to be added to the listing
* Users will have different options open to them based on the listing they're viewing and their permissions

## AWS S3 Integration
Adding Amazon Web Services was a core part of the application and allowed our users to add photos to their listings.

This proved to be an integral optimization of the app. It helps with scalability as the server doesn't need to host all of the images in the database, which would subsequently increase server-load.

![AWS Image](https://github.com/Brent1LT/Carro/blob/master/app/assets/images/readme1.png)
```
//listing_form.jsx

handleSubmit(e){
  e.preventDefault();
  if (this.props.currentUser){
    const formData = new FormData();
    formData.append('listing[extras]', this.state.listingFormData.extras);
    formData.append('listing[guidelines]', this.state.listingFormData.guidelines);
    formData.append('listing[location]', this.state.listingFormData.location);
    formData.append('listing[price]', this.state.listingFormData.price);
    formData.append('listing[trip_counter]', this.state.listingFormData.tripCounter);
    formData.append('car[make]', this.state.carFormData.make);
    formData.append('car[model]', this.state.carFormData.model);
    formData.append('car[year]', this.state.carFormData.year);
    formData.append('car[mpg]', this.state.carFormData.mpg);
    formData.append('car[gas]', this.state.carFormData.gas);
    formData.append('car[transmission]', this.state.carFormData.transmission);
    formData.append('car[trim]', this.state.carFormData.trim);
    formData.append('car[description]', this.state.carFormData.description);
    formData.append('car[num_of_doors]', this.state.carFormData.numOfDoors);
    formData.append('car[num_of_seats]', this.state.carFormData.numOfSeats);
    this.state.photos.photosData.forEach(photo => {
      formData.append('listing[photos][]', photo);
    });
    this.props.createListing(formData).then(payload => {
      let listing = Object.values(payload.listings);
      this.props.history.push(`/listings/${listing[0].id}`);
    });
  }else {
    this.props.openModal('Sign up');
  }
}

```
## Dropdown Menus
Mimicing the dropdown menu from Turo's website was especially difficult. Each form is 
it's own component and when one is clicked, the other forms must collapse. This was handled
in Redux global state so that different actions could be dispatched.

However there was an initial issue when setting local state since the className would need to change 
and use the transform effect. The issue was that I was setting state and dispatching an action which would 
cause the application to crash. After discovering that 'setState' is asynchronous, the remedy to this issue
was to dispatch the action in a callback to 'setState', which now maintains a fluid design.

![Dropdown](https://github.com/Brent1LT/Carro/blob/master/app/assets/images/dropdown_readme.gif)

```
//create_listing_form.jsx

openNextDrop(e) {
  e.preventDefault();
  this.setState({ nextAction: true }, () => {
    this.props.closeListingDrop();
  });
}

componentDidUpdate() {
  if (this.state.nextAction) {
    this.setState({ nextAction: false }, () => {
      this.openCarDrop();
    });
  }
}

```

## User Permissions
Since Turo has its website laid out in a way that a user can essentially access almost
any part of the website without being logged in, I had to adjust my React components to 
render in a specific manor as to not allow a user to access a piece of information that they
weren't supposed to. 

In order to do this, certain buttons or actions are only rendered to a user if they are creator of
a listing. Carro checks the current session user ID to ensure it is the same as the creator of the 
listing. If the IDs are the same, the user is allowed to update or delete their post.

![Permissions Image](https://github.com/Brent1LT/Carro/blob/master/app/assets/images/CRUD_readme.png)

```
// listing_show.jsx

authComponents(){
  let listing = this.props.listing;
  let currUser = this.props.currUser;
  if(currUser === listing.userId){
    return (
      <div>
        <Link to={`/listings/${listing.id}/edit`} >
          <button className='update-listing-button'>Update Listing</button>
        </Link>
        <button onClick={() => this.handleDelete(listing)} className='delete-listing-button'>Delete Listing</button>
      </div>
    )
  }else return null;
}

```

## Future Features & Tasks
* Add a bookings calendar, booking index page
* Add map API, with searchable function for listing index
* User profile page
* Google/Apple calendar integration, for storing events in a user's personal calendar
