class Api::StepsController < ApplicationController

  def index
    @steps = Step.where(article_id: step_params[:article_id])
  end

  def create
    @step = Step.new(step_params)
    @step.save!
    render 'api/steps/show'
  end

  def show
    @step = Step.find(params[:id])
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy!
    render 'api/steps/show'
  end

  def update
    @step = Step.find(params[:id])
    if @step.update!(step_params)
      render 'api/steps/show'
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  private

  def step_params
    params.require(:step).permit(:body, :order, :title, :article_id)
  end

end
