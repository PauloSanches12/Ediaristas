package com.paulo.ediaristasbackend.repositories;

import com.paulo.ediaristasbackend.models.Diarista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaristaRepository extends JpaRepository<Diarista, Long> {
}
