module Api
  module V1
    class ReviewsController < ApplicationController

      def create
        review = Review.new(review)

        if review.save
          render json: ReviewSerializer.new(review).serialized_json
        else
          render json: { error: airline.errors.messages }, status: 422
      end

      def desotry
        review = Review.find(review)

        if review.destroy
          head :no_content #returns Status Code:200 OK
        else
          render json: { error: airline.errors.messages }, status: 422
      end
      private

      def review_params
        params.require(:review).permit(:title, :description, :score, :airline_id)
      end
    end
  end
end
