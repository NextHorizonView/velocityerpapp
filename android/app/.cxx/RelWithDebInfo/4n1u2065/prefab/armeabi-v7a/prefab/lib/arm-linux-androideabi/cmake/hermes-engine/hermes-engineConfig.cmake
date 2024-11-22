if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/home/raj/.gradle/caches/8.10.2/transforms/4d3b5360b77892d5e3a09d4b50d61c7e/transformed/hermes-android-0.76.2-release/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/raj/.gradle/caches/8.10.2/transforms/4d3b5360b77892d5e3a09d4b50d61c7e/transformed/hermes-android-0.76.2-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

