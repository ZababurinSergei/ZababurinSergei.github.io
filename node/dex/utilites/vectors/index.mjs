const self = {
    cache: []
}

const normalize_vec = (vec) => {
    /**
     L2-normalize a single vector, as a 1-D ndarray or a Series.
     */
    /*
    if isinstance(vec, pd.Series):
        return normalize(vec.fillna(0).values.reshape(1, -1))[0]
    elif isinstance(vec, np.ndarray):
        return normalize(vec.reshape(1, -1))[0]
    else:
        raise TypeError(vec)
     */
    return {
        dot: () => {

        }
    }
}

const cosine_similarity = (vec1, vec2) => {
    /**
     Get the cosine similarity between two vectors -- the cosine of the angle
     between them, ranging from -1 for anti-parallel vectors to 1 for parallel
     vectors.
     */
    return normalize_vec(vec1).dot(normalize_vec(vec2))
}

const get_similarity = (self, query1, query2) => {
    const vec1 = self.get_vector(self, query1)
    const vec2 = self.get_vector(self, query2)

    return cosine_similarity(vec1, vec2)
}

export default {
    get_similarity: get_similarity
}