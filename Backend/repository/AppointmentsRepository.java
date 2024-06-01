package com.example.demo.doclogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.doclogin.entity.Appointment;

@Repository
public interface AppointmentsRepository extends JpaRepository<Appointment, Long>{

}
