puts "Deleting past records..."
Property.delete_all

puts 'Generating flats & houses...'

Property.create(
  address: 'Samariterstr. 1 Berlin',
  building: 'Apartment',
  size: '75',
  year: '1994',
  rent: '1740',
  rooms: 2,
  state: 'Premium'
).photo.attach(
  io: URI.open('https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1646&q=80'),
  filename: 'amartent1',
  content_type: 'image/jpeg'
)
Property.create(
  address: 'Grunbergerstr. 55 Berlin',
  building: 'House',
  size: '90',
  year: '2000',
  rent: '1740',
  rooms: 2,
  state: 'Normal'
).photo.attach(
  io: URI.open('https://images.unsplash.com/photo-1593604340846-4fbe9763a8f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'),
  filename: 'house2',
  content_type: 'image/jpeg'
)
Property.create(
  address: 'Muntzstr. 22 Berlin',
  building: 'House',
  size: '75',
  year: '1990',
  rent: '1740',
  rooms: 3,
  state: 'Normal'
).photo.attach(
  io: URI.open('https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'),
  filename: 'house2',
  content_type: 'image/jpeg'
)
Property.create(
  address: 'Warschauerstr. 8 Frankfurt',
  building: 'Apartment',
  size: '45',
  year: '1880',
  rent: '990',
  rooms: 3,
  state: 'Simple'
).photo.attach(
  io: URI.open('https://images.unsplash.com/photo-1489936724440-afaf5a115ede?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1933&q=80'),
  filename: 'amartent1',
  content_type: 'image/jpeg'
)
Property.create(
  address: 'Gubenerstr. 5 Tannheim',
  building: 'Apartment',
  size: '220',
  year: '2003',
  rent: '4000',
  rooms: 5,
  state: 'Premium'
).photo.attach(
  io: URI.open('https://images.unsplash.com/photo-1495766682737-d96292f4eb4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'),
  filename: 'house2',
  content_type: 'image/jpeg'
)
Property.create(
  address: 'Weserstr. 22 Munich',
  building: 'Apartment',
  size: '50',
  year: '1999',
  rent: '1100',
  rooms: 1,
  state: 'Premium'
).photo.attach(
  io: URI.open('https://images.unsplash.com/photo-1484606075493-62da7cd65654?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80'),
  filename: 'house2',
  content_type: 'image/jpeg'
)
Property.create(
  address: 'Alexanderplatz. 2 Berlin',
  building: 'Apartment',
  size: '300',
  year: '2006',
  rent: '4333',
  rooms: 6,
  state: 'Premium'
).photo.attach(
  io: URI.open('https://images.unsplash.com/photo-1515263487990-61b07816b324?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'),
  filename: 'house2',
  content_type: 'image/jpeg'
)

puts 'Finished!'
puts 'Now please run rails s and visit the demo at http://localhost:3000/'