class Api::V1::PropertiesController < ApplicationController
  # Serializer to get the cloudinary url to React
  include ActionController::Serialization

  def index
    @properties = Property.all
    render json: @properties, include: [:photo]
  end

  def create
    # Creating a new instance with the params gathered from frontend
    property = Property.create!(property_params)
    render json: property
  end

  def property_params
    params.require(:property).permit(:property, :address, :photo, :size, :year, :rooms, :rent, :building, :state)
  end
end
