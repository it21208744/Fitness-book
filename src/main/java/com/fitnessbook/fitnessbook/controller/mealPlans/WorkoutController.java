package com.fitnessbook.fitnessbook.controller.mealPlans;

import com.fitnessbook.fitnessbook.entities.Workouts;
import com.fitnessbook.fitnessbook.repositories.WorkoutRepository;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/workout")
public class WorkoutController {

@Autowired
    private WorkoutRepository workoutRepo;

    //Build Add Workout REST API
    @PostMapping
   public void createWorkout(@RequestBody Workouts workoutDto){
        workoutRepo.save(workoutDto);
   }

    //Build Get Workout REST API
    @GetMapping("{id}")
   public ResponseEntity<Workouts> getWorkoutById(@PathVariable("id") String workoutId){
       Optional<Workouts> Optworkout = workoutRepo.findById(workoutId);
       Workouts workout = Optworkout.get();

        return ResponseEntity.ok(workout);
   }
//
//    //Build GetAll Workout REST API
    @GetMapping
    public ResponseEntity<List<Workouts>> getAllWorkout(){
        List<Workouts> workouts = workoutRepo.findAll();

        return new ResponseEntity<>(workouts, HttpStatus.OK);

    }
//
//    //Build Update Workout REST API
    @PutMapping("{id}")
     public ResponseEntity<Workouts> updateWorkout(@PathVariable("id") String workoutId,
                                                     @RequestBody Workouts updatedWorkout){
        Optional<Workouts> Optworkout = workoutRepo.findById(workoutId);
        System.out.println("heh");
        Workouts workout = Optworkout.get();
        workout.setReps(updatedWorkout.getReps());
        workout.setRest(updatedWorkout.getRest());
        workout.setSets(updatedWorkout.getSets());
        workout.setTmg(updatedWorkout.getTmg());
        workout.setFrequency(updatedWorkout.getFrequency());
        workout.setType(updatedWorkout.getType());
        workout.setDescription(updatedWorkout.getDescription());
        workout.setExerciseName(updatedWorkout.getExerciseName());
        workout.setTitle(updatedWorkout.getTitle());

        workoutRepo.save(workout);
        return ResponseEntity.ok(workout);
     }

//Build Delete Workout REST API
@DeleteMapping("{id}")
public ResponseEntity<String> deleteWorkout(@PathVariable("id") String workoutId){
    Optional<Workouts> Optworkout = workoutRepo.findById(workoutId);
    if(Optworkout != null){
        workoutRepo.deleteById(workoutId);
    }
        return  ResponseEntity.ok("Workout deleted successfully!.");
}

}
