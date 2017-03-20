class Step < ApplicationRecord
  validates :order, :article_id, :body, presence: true

  has_many :images,
      as: :imageable,
      dependent: :delete_all,
      inverse_of: :imageable

  belongs_to :article
end
