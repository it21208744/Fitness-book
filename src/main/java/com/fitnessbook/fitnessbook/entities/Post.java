package com.fitnessbook.fitnessbook.entities;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Lob;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
//@Entity
//@Table(name = "posts")
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;



    //    @Lob
//    @Column(name = "image_url", columnDefinition = "BLOB")
    private byte[] imageData; // Store image data as byte array

    //    @Lob
//    @Column(name = "video_url", columnDefinition = "BLOB")
    private byte[] videoData; // Store image data as byte array


    //    @Column(name = "description")
    private String description;

    @CreatedDate
//    @Column(name = "created_at")
    private LocalDateTime createdAt;




    public String getId() {
        return id;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setId(String id) {
        this.id = id;
    }



    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public byte[] getVideoData() {
        return videoData;
    }

    public void setVideoData(byte[] videoData) {
        this.videoData = videoData;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }




}
