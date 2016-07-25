if (Meteor.isServer) {
}
Router.route('/', function () {
  this.render('Home');
});

Router.route('about');
Router.route('contact');
Router.route('donate');
