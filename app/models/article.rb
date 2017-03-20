# == Schema Information
#
# Table name: articles
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  published   :boolean          default("false")
#

class Article < ApplicationRecord
  validates :title, :description, :user_id, presence: true

  belongs_to :user
  has_many :steps, dependent: :delete_all
  has_many :images, as: :imageable, dependent: :delete_all, inverse_of: :imageable

  def self.find_by_title(title)
    Article.find_by_title(title).includes(:steps)
  end

end
