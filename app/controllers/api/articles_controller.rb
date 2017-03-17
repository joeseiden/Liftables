class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])

    if @article
      render 'api/articles/show'
    else
      render json: ["Article not found"], status: 404
    end
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def update
    @article = Article.find(params[:id])

    if @article.update
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def destroy
    @article = Article.find(params[:id])

    if @article.destroy
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 401
    end
  end

  private

  def article_params
    params.require(:article).permit(:title, :description, :image_url, :user_id, :published)
  end
end
