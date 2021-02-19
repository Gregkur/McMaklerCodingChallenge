class ApplicationController < ActionController::Base
  include ActionController::Serialization
  # Localhost testing reasons, would have to be deleted for production
  protect_from_forgery with: :null_session
end
