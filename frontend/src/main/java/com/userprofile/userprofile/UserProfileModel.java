/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.userprofile.userprofile;

/**
 *
 * @author lester
 */
public class UserProfileModel {
    private long id;

    
    public UserProfileModel(long id){
        this.id = id;
        System.out.println(id);
    }

    /**
     * @return the id
     */
    public long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(long id) {
        this.id = id;
    }
    
    

    
    
    
}
