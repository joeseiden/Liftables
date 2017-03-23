class Api::ImagesController < ApplicationController
  before_action :find_imageable
  skip_before_action :find_imageable, only: [:destroy, :update]


  def index
    @images = @imageable.images
  end

  def create
    @image = Image.new(image_params)
    @image.imageable = @imageable
    if @image.save
      render 'api/images/show'
    end
  end

  def destroy
    @image = Image.find(params[:id])
    if @image.destroy
      render 'api/images/show'
    end
  end

  def update
    @image = Image.find(params[:id])
    @image.update(image_params)
    render 'api/images/show'
  end

  private

  def find_imageable
    type, id = params[:type], params[:id]
    @imageable = type.singularize.classify.constantize.find(id)
  end

  def image_params
    params.require(:image).permit(:url)
  end
end
