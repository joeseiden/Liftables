class Comment < ApplicationRecord
  validates :content, :user_id, :article_id, presence: true

  belongs_to :article
  belongs_to :user

end
