if (Posts.find().count() === 0) {
  Posts.insert({
    strain: 'Kush',
    leaflyurl: 'http://leafly.com', 
    smellslike: 'Sweet'
  });

  Posts.insert({
    strain: 'Kush',
    leaflyurl: 'http://leafly.com', 
    smellslike: 'Sweet'
  });

  Posts.insert({
    strain: 'Test',
    leaflyurl: 'http://leafly.com', 
    smellslike: 'Sweet'
  });
}
