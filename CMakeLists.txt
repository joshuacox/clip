# Minimum CMake version required
cmake_minimum_required(VERSION 3.14)

project(clip)

# Specify the script file to be installed
set(CLIP_NAME "clip")
set(CLIP_PATH "${CMAKE_CURRENT_SOURCE_DIR}/${CLIP_NAME}")

# Install the script to a destination directory
# The 'PROGRAMS' form ensures executable permissions are set.
# 'DESTINATION bin' places it in the 'bin' subdirectory of the install prefix.
install(PROGRAMS ${CLIP_PATH} 
    DESTINATION bin
    PERMISSIONS OWNER_READ OWNER_WRITE OWNER_EXECUTE GROUP_READ GROUP_EXECUTE WORLD_READ WORLD_EXECUTE
)

# Install the man page with proper section handling
install(
    FILES ${CMAKE_CURRENT_SOURCE_DIR}/man/clip.1
    DESTINATION share/man/man1
    COMPONENT Runtime
)
# --------------------------------------------------------------
# Optional: make the install prefix visible to the user (helpful for packaging)
# --------------------------------------------------------------
message(STATUS "Install prefix: ${CMAKE_INSTALL_PREFIX}")
message(STATUS "Binary will be installed to: ${CMAKE_INSTALL_PREFIX}/bin")
message(STATUS "Man page will be installed to: ${CMAKE_INSTALL_PREFIX}/share/man/man1")
