# serializing the json to include the url of the photo
class PropertySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :address, :photo, :size, :year, :rooms, :rent, :building, :state, :id

  def photo
    if object.photo.attached?
      {
        url: object.photo.service_url
     }
    end
  end
end
