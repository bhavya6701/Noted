package com.project.noted.jpa;

import com.project.noted.entity.Feedback;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class FeedbackJpaRepository {
    @PersistenceContext
    EntityManager entityManager;

    public void addFeedback(Feedback feedback) {
        entityManager.merge(feedback);
    }

    public List<Feedback> getAllFeedback() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Feedback> query = builder.createQuery(Feedback.class);
        Root<Feedback> root = query.from(Feedback.class);
        query.orderBy(builder.desc(root.get("date")));
        return entityManager.createQuery(query).getResultList();
    }
}
