if (Meteor.isClient) {
}
Router.route('/', function () {
  this.render('Home');
});

Router.route('/about');
Router.route('/contact');
Router.route('/donate');
