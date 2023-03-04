module Api
  module V1
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session # turns on request forgery protection and checks for the CSRF token in non-GET and non-HEAD requests
      def create
        review = Review.new(review)

        if review.save
          render json: ReviewSerializer.new(review).serializable_hash.to_json
        else
          render json: { error: airline.errors.messages }, status: 422
      end

      def destroy
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
