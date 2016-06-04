class FacilitiesController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    @facilities = Facility.all
  end
end
