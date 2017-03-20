class Api::ImagesController < ApplicationController

  def index
    @images = @imageable.images
  end

  def create_table
    @image = @imageable.images.new(image_params)
    @image.save
    render 'api/images/show'
  end

  def destroy
    @image = Image.find(params[:id])
    @image.destroy
    render 'api/images/show'
  end

  def update
    @image = Image.find(params[:id])
    @image.update(image_params)
    render 'api/images/show'
  end

  private

  def load_imageable
    resource, id = request.path.split('/')[2, 3]
    @imageable = resource.singularize.classify.constantize.find(id)
  end

  def image_params
    params.require(:image).permit(:url)
  end
end
