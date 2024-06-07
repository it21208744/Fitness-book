package com.fitnessbook.fitnessbook.errorHandle.mealPlan;

public class notFoundError extends RuntimeException{
    public notFoundError(String message) {
        super(message);
    }
}
