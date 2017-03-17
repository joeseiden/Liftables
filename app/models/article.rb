# == Schema Information
#
# Table name: articles
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  image_url   :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  published   :boolean          default("false")
#

class Article < ApplicationRecord
  validates :title, :description, :image_url, :user_id, presence: true

  belongs_to :user
  has_many :steps

  def self.find_by_title(title)
    Article.find_by_title(title).includes(:steps)
  end

end
