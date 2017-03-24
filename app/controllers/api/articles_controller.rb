class Api::ArticlesController < ApplicationController
  def index
    if params[:search_query]
      query = params[:search_query].downcase
      @articles = Article
                .includes(:images, :user)
                .where("lower(title) LIKE ?", "%#{query}%")
    else
      @articles = Article.includes(:images, :user).all
    end
  end

  def show
    @article = Article.includes(:images, :user,
                                 steps: [:images],
                                 comments: [:user]).find(params[:id])

    if @article
      render 'api/articles/show'
    else
      render json: ["Article not found"], status: 404
    end
  end

  def create
    @article = Article.new(article_params)
    @article.user_id = current_user.id

    if @article.save
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def update
    @article = Article.find(params[:id])

    if @article.update!(article_params)
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
    params.require(:article).permit(:id, :title, :description, :published)
  end
end
