class Airline < ApplicationRecord
  has_many :reviews

  before_create :slugify # s called before Base.save on new objects that haven’t been saved yet (no record exists).

  def slugify
    self.slug = name.parameterize # Replaces special characters in a string so that it may be used as part of a ‘pretty’ URL.
  end

  def avg_score
    reviews.average(:score).round(2).to_f
  end
end
