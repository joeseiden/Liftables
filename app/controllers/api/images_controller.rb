class Api::ImagesController < ApplicationController

  def index
    @images = @imageable.images
  end

  def create
    @image = Image.new(image_params)
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

  def load_imageable
    resource, id = request.path.split('/')[2, 3]
    @imageable = resource.singularize.classify.constantize.find(id)
  end

  def image_params
    params.permit(:image)
  end
end
