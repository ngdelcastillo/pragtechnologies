class HomeController < ApplicationController
  def index
    @message = "Welcome to my home page"
    @about_me = "I'm Noel E. del Castillo..."
  end
end
