class ArticleImage < ApplicationRecord
  validates :url, :article_id, presence: true

  belongs_to :article
end
