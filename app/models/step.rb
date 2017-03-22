class Step < ApplicationRecord
  validates :title, :order, :article_id, presence: true

  has_many :images,
      as: :imageable,
      dependent: :delete_all,
      inverse_of: :imageable

  belongs_to :article
end
